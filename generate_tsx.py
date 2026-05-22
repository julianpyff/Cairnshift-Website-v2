import re

def process_markdown(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split into lines
    lines = content.split('\n')
    
    sections = []
    current_section = None
    header_lines = []
    
    in_header = True
    for line in lines:
        if in_header:
            if line.startswith('**1.'):
                in_header = False
            else:
                if line.strip():
                    header_lines.append(line.strip())
                continue
                
        if line.startswith('**') and re.match(r'^\*\*\d+\.', line):
            if current_section:
                sections.append(current_section)
            
            # Remove ** 
            title = line.replace('**', '').strip()
            current_section = {'title': title, 'content': []}
        elif current_section is not None:
            if line.strip():
                current_section['content'].append(line.strip())

    if current_section:
        sections.append(current_section)

    tsx_sections = []
    for i, sec in enumerate(sections, 1):
        tsx_lines = []
        tsx_lines.append(f'                    {{/* Section {i} */}}')
        tsx_lines.append(f'                    <section className="flex flex-col gap-4">')
        tsx_lines.append(f'                        <h2 className="text-2xl font-medium">{sec["title"]}</h2>')
        tsx_lines.append(f'                        <div className="flex flex-col gap-2 opacity-80 leading-relaxed">')
        
        # Parse content inside section
        in_list = False
        for c in sec["content"]:
            # Check if it's a list item (starts with a number like "1. ", or letter like "(a) ")
            # Wait, the markdown has lists like "1. ", "2. "
            if re.match(r'^(\d+\.|[a-z]\)|\([a-z]\))\s', c):
                if not in_list:
                    tsx_lines.append(f'                            <ul className="list-disc pl-5 space-y-1">')
                    in_list = True
                # Remove the number/letter prefix for the list item text? 
                # Actually, in the old file, list items don't have numbers in the text, but the markdown does.
                # E.g. "1. any level of revenue..."
                # Let's just put it in an <li>. If we want to keep the number, we could use <ol> instead of <ul>.
                # Wait, the previous file used <ul className="list-disc..."> and no numbers.
                # If the markdown has numbers, let's just output them as they are inside <li> for safety, or leave them.
                # Let's keep them as they are inside <li>.
                li_text = re.sub(r'^(\d+\.|[a-z]\)|\([a-z]\))\s*', '', c).strip()
                tsx_lines.append(f'                                <li>{li_text}</li>')
            else:
                if in_list:
                    tsx_lines.append(f'                            </ul>')
                    in_list = False
                
                # Check for bold subheadings like **3.1 Express Authorisation**
                if c.startswith('**') and c.endswith('**'):
                    sub_title = c.replace('**', '').strip()
                    tsx_lines.append(f'                            <h3 className="text-lg font-medium text-[#15353c] mt-4">{sub_title}</h3>')
                else:
                    tsx_lines.append(f'                            <p>{c}</p>')
                    
        if in_list:
            tsx_lines.append(f'                            </ul>')
        
        tsx_lines.append(f'                        </div>')
        tsx_lines.append(f'                    </section>')
        tsx_sections.append("\n".join(tsx_lines))

    # Construct full TSX
    sections_jsx = "\n\n".join(tsx_sections)
    
    # Header logic - custom
    # CAIRNSHIFT GENERAL TERMS AND CONDITIONS OF BUSINESS (the “Terms”)
    # (Applicable to all Consultancy, Lead Generation and related Services)
    # Version: March 2026
    
    full_tsx = f"""export const Content = (): JSX.Element => {{
    return (
        <div className="flex flex-col items-start px-4 md:px-8 lg:px-[60px] py-12 md:py-16 lg:py-[104px] w-full bg-[#f3f3f3] relative">
            <div className="flex flex-col items-start gap-12 w-full max-w-[960px]">
                {{/* Header Block */}}
                <div className="flex flex-col items-start gap-6 md:gap-10">
                    <div className="inline-flex items-center gap-4 relative">
                        <div className="relative w-2 h-2 bg-[#ee9d2b] rounded" />
                        <div className="flex items-center justify-center [font-family:'DM_Mono',Helvetica] text-[#222f30] text-right leading-[14px] relative w-fit mt-[-1.00px] font-medium text-sm md:text-base tracking-[0] whitespace-nowrap uppercase">
                            TERMS AND CONDITIONS
                        </div>
                    </div>
                    <h1 className="w-full [font-family:'DM_Sans',Helvetica] font-medium text-[#15353c] text-[32px] md:text-[48px] tracking-[-1px] leading-[1.2]">
                        CAIRNSHIFT GENERAL TERMS AND CONDITIONS OF BUSINESS (the “Terms”)
                        <br />
                        <span className="text-[20px] md:text-[24px] opacity-60 font-normal">(Applicable to all Consultancy, Lead Generation and related Services)</span>
                    </h1>
                    <p className="[font-family:'DM_Sans',Helvetica] text-[#15353c] text-base opacity-60">
                        Version: March 2026
                    </p>
                </div>

                {{/* Content Sections */}}
                <div className="flex flex-col gap-10 md:gap-14 w-full text-[#15353c] [font-family:'DM_Sans',Helvetica]">
{sections_jsx}
                </div>
            </div>
        </div>
    );
}};
"""
    
    with open('/tmp/Cairnshift-Website-v2-temp/src/screens/TermsConditions/sections/Content.tsx', 'w', encoding='utf-8') as f:
        f.write(full_tsx)

process_markdown('/tmp/Cairnshift-Website-v2-temp/terms and conditions.md')
print("Successfully generated Content.tsx")
