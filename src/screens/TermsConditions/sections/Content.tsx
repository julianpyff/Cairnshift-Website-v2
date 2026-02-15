export const Content = (): JSX.Element => {
    return (
        <div className="flex flex-col items-start px-4 md:px-8 lg:px-[60px] py-12 md:py-16 lg:py-[104px] w-full bg-[#f3f3f3] relative">
            <div className="flex flex-col items-start gap-12 w-full max-w-[960px]">
                {/* Header Block */}
                <div className="flex flex-col items-start gap-6 md:gap-10">
                    <div className="inline-flex items-center gap-4 relative">
                        <div className="relative w-2 h-2 bg-[#ee9d2b] rounded" />
                        <div className="flex items-center justify-center [font-family:'DM_Mono',Helvetica] text-[#222f30] text-right leading-[14px] relative w-fit mt-[-1.00px] font-medium text-sm md:text-base tracking-[0] whitespace-nowrap uppercase">
                            TERMS AND CONDITIONS
                        </div>
                    </div>
                    <h1 className="w-full [font-family:'DM_Sans',Helvetica] font-medium text-[#15353c] text-[40px] md:text-[56px] tracking-[-2px] leading-[1.1]">
                        Strong Paw Holding Ltd
                        <br />
                        <span className="text-[24px] md:text-[32px] opacity-60 font-normal">(Trading as “Cairnshift”)</span>
                    </h1>
                    <p className="[font-family:'DM_Sans',Helvetica] text-[#15353c] text-base opacity-60">
                        Version: February 2026
                    </p>
                </div>

                {/* Content Sections */}
                <div className="flex flex-col gap-10 md:gap-14 w-full text-[#15353c] [font-family:'DM_Sans',Helvetica]">
                    {/* Section 1 */}
                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-medium">1. COMPANY DETAILS</h2>
                        <div className="flex flex-col gap-2 opacity-80 leading-relaxed">
                            <p>1.1 Strong Paw Holding Ltd is a company incorporated in Scotland (“SPH”, “Cairnshift”, “we”, “us”).</p>
                            <p>1.2 Cairnshift is a trading name of Strong Paw Holding Ltd.</p>
                            <p>1.3 These Terms apply to all services provided by SPH unless otherwise agreed in writing.</p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-medium">2. NATURE OF SERVICES</h2>
                        <div className="flex flex-col gap-2 opacity-80 leading-relaxed">
                            <p>2.1 SPH provides go-to-market strategy, lead generation, sales development, CRM integration, AI-assisted analytics, outreach execution and commercial support services (“Services”).</p>
                            <p className="font-medium">2.2 All Services are provided on a reasonable endeavours basis only.</p>
                            <p>2.3 SPH does not guarantee:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Revenue</li>
                                <li>Sales conversions</li>
                                <li>Pipeline value</li>
                                <li>Meeting numbers</li>
                                <li>Deal closure</li>
                                <li>Commercial outcomes of any kind</li>
                            </ul>
                            <p>2.4 Performance-based fee structures do not create performance guarantees.</p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-medium">3. AUTHORISED EMBEDDED COMMERCIAL REPRESENTATION</h2>
                        <div className="flex flex-col gap-6 opacity-80 leading-relaxed">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-medium text-[#15353c]">3.1 Express Authorisation</h3>
                                <p>The Client expressly authorises SPH and its personnel to:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Conduct outreach under the Client’s brand</li>
                                    <li>Use email accounts under the Client’s domain</li>
                                    <li>Operate designated employee mailboxes</li>
                                    <li>Create and use dedicated domain accounts</li>
                                    <li>Communicate using Client-branded signatures</li>
                                    <li>In certain cases, communicate using the name of an actual employee where authorised</li>
                                    <li>Participate in commercial calls representing the Client</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-medium text-[#15353c]">3.2 Limitation of Authority</h3>
                                <p>Notwithstanding such authorisation:</p>
                                <p>SPH:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Has no authority to legally bind the Client</li>
                                    <li>May not execute contracts</li>
                                    <li>May not agree to pricing or contractual terms</li>
                                    <li>May not provide regulated advice</li>
                                    <li>May not alter commercial commitments without written approval</li>
                                </ul>
                                <p>All contracts must be signed directly by the Client.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-medium text-[#15353c]">3.3 Apparent Authority Acknowledgement</h3>
                                <p>The Client acknowledges that the embedded communication model may create apparent authority in the eyes of third parties.</p>
                                <p>The Client agrees that SPH’s authority is contractually limited as defined herein and accepts responsibility for communications made under its authorisation.</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-medium">4. USE OF EMPLOYEE IDENTITY & MAILBOXES</h2>
                        <div className="flex flex-col gap-2 opacity-80 leading-relaxed">
                            <p>4.1 Where SPH operates an employee mailbox or communicates using an employee’s name:</p>
                            <div className="pl-4 border-l-2 border-[#15353c]/20">
                                <p>The Client warrants that:</p>
                                <ul className="list-disc pl-5 space-y-1 mt-1">
                                    <li>It has lawful authority to grant such access.</li>
                                    <li>The relevant employee has been informed where legally required.</li>
                                    <li>Internal policies permit such arrangement.</li>
                                </ul>
                            </div>
                            <p>4.2 SPH personnel remain employees or contractors of SPH at all times.</p>
                            <p>4.3 No employment, worker, partnership or joint employment relationship is created between SPH personnel and the Client.</p>
                            <p>4.4 The Client indemnifies SPH against claims arising from:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Employment disputes</li>
                                <li>Internal authorisation disputes</li>
                                <li>Identity or impersonation allegations</li>
                                <li>Misunderstandings by third parties regarding authority</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-medium">5. CLIENT RESPONSIBILITY FOR REPRESENTATIONS</h2>
                        <div className="flex flex-col gap-2 opacity-80 leading-relaxed">
                            <p>5.1 All communications sent from the Client’s domain are legally attributable to the Client.</p>
                            <p>5.2 The Client remains solely responsible for:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Product representations</li>
                                <li>Pricing statements</li>
                                <li>Regulatory claims</li>
                                <li>Industry compliance</li>
                                <li>Financial promotions</li>
                                <li>Commercial commitments</li>
                            </ul>
                            <p>5.3 SPH relies on the accuracy of information supplied by the Client.</p>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-medium">6. PERFORMANCE-BASED COMPENSATION</h2>
                        <div className="flex flex-col gap-2 opacity-80 leading-relaxed">
                            <p>6.1 Retainer fees are payable monthly in advance unless agreed otherwise.</p>
                            <p>6.2 Performance-based fees are payable upon occurrence of agreed trigger events.</p>
                            <p>6.3 The Client shall not structure, delay or recharacterise transactions to avoid performance-based payments.</p>
                            <p>6.4 Performance components do not create partnership or shared-risk structures.</p>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-medium">7. CRM ACCESS & SYSTEM INTEGRATION</h2>
                        <div className="flex flex-col gap-2 opacity-80 leading-relaxed">
                            <p>7.1 SPH may access Client CRM systems under credentials provided by the Client.</p>
                            <p>7.2 The Client remains responsible for:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Data accuracy</li>
                                <li>Data lawfulness</li>
                                <li>Internal permissions</li>
                                <li>System configuration</li>
                            </ul>
                            <p>7.3 Integration of SPH knowledge engines or automation tools is provided on a best-efforts basis without guarantee of uninterrupted operation.</p>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-medium">8. AI, AUTOMATION & THIRD-PARTY TOOLS</h2>
                        <div className="flex flex-col gap-2 opacity-80 leading-relaxed">
                            <p>8.1 SPH may use AI tools including but not limited to:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Fireflies</li>
                                <li>Google Gemini Pro</li>
                                <li>Anthropic Claude</li>
                                <li>CRM automation tools</li>
                                <li>Outreach platforms</li>
                            </ul>
                            <p>8.2 AI outputs are probabilistic and assistive only.</p>
                            <p>8.3 SPH makes no warranty as to:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Accuracy</li>
                                <li>Completeness</li>
                                <li>Suitability</li>
                                <li>Regulatory compliance of AI-generated content</li>
                            </ul>
                            <p>8.4 SPH is not liable for tool outages, software limitations, algorithm changes, API failures or vendor actions.</p>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-medium">9. DATA PROTECTION</h2>
                        <div className="flex flex-col gap-2 opacity-80 leading-relaxed">
                            <p>9.1 The Client acts as Data Controller.</p>
                            <p>9.2 SPH acts as Data Processor where applicable.</p>
                            <p>9.3 The Client warrants that all personal data supplied is lawfully obtained and processed.</p>
                            <p>9.4 The Client indemnifies SPH against claims arising from unlawful data use or marketing practices.</p>
                            <p>9.5 SPH shall implement appropriate technical and organisational measures.</p>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-medium">10. MARKETING & REGULATORY COMPLIANCE</h2>
                        <div className="flex flex-col gap-2 opacity-80 leading-relaxed">
                            <p>The Client remains solely responsible for compliance with:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>UK GDPR</li>
                                <li>EU GDPR</li>
                                <li>PECR</li>
                                <li>CAN-SPAM</li>
                                <li>CASL</li>
                                <li>Local advertising laws</li>
                                <li>Financial promotion rules</li>
                                <li>Industry-specific regulations</li>
                                <li>Sanctions and export laws</li>
                            </ul>
                            <p>SPH acts strictly under Client instruction.</p>
                        </div>
                    </section>

                    {/* Section 11 */}
                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-medium">11. SALES PROCESS RISK DISCLAIMER</h2>
                        <div className="flex flex-col gap-2 opacity-80 leading-relaxed">
                            <p>Sales processes involve inherent uncertainty.</p>
                            <p>SPH shall not be liable for:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Missed meetings</li>
                                <li>Delayed confirmations</li>
                                <li>Prospect non-responsiveness</li>
                                <li>Calendar errors</li>
                                <li>Lost opportunities</li>
                                <li>Deal collapse</li>
                                <li>Reputational harm</li>
                                <li>Prospect complaints</li>
                                <li>Commercial disputes between Client and third parties</li>
                            </ul>
                            <p>Unless caused by proven gross negligence or wilful misconduct.</p>
                        </div>
                    </section>

                    {/* Section 12 */}
                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-medium">12. LIMITATION OF LIABILITY</h2>
                        <div className="flex flex-col gap-2 opacity-80 leading-relaxed">
                            <p>12.1 SPH shall only be liable for direct losses caused by proven gross negligence or wilful misconduct.</p>
                            <p>12.2 SPH shall not be liable for:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Loss of profit</li>
                                <li>Loss of revenue</li>
                                <li>Loss of contracts</li>
                                <li>Loss of opportunity</li>
                                <li>Loss of goodwill</li>
                                <li>Indirect or consequential loss</li>
                                <li>Reputational damage</li>
                                <li>Regulatory fines imposed on the Client</li>
                                <li>Claims from the Client’s customers or prospects</li>
                            </ul>
                            <p>12.3 Total aggregate liability shall not exceed the total fees paid by the Client in the preceding six (6) months.</p>
                            <p>12.4 Any claim must be brought within six (6) months of the event giving rise to the claim.</p>
                            <p>12.5 Nothing excludes liability that cannot legally be excluded under Scots law.</p>
                        </div>
                    </section>

                    {/* Section 13 */}
                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-medium">13. INDEMNITY</h2>
                        <div className="flex flex-col gap-2 opacity-80 leading-relaxed">
                            <p>The Client shall indemnify and hold harmless SPH from any third-party claims arising from:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Client’s products or services</li>
                                <li>Regulatory breaches</li>
                                <li>Marketing legality issues</li>
                                <li>Misrepresentation based on Client-provided materials</li>
                                <li>Contracts concluded by the Client</li>
                                <li>Use of employee identity authorised by the Client</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 14 */}
                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-medium">14. INTELLECTUAL PROPERTY</h2>
                        <div className="flex flex-col gap-2 opacity-80 leading-relaxed">
                            <p>SPH retains ownership of:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Methodologies</li>
                                <li>Playbooks</li>
                                <li>Automation systems</li>
                                <li>GTM frameworks</li>
                                <li>Templates</li>
                                <li>AI prompt structures</li>
                            </ul>
                            <p>The Client receives a non-exclusive limited licence upon full payment which for the avoidance of doubt is limited to the duration of the contract.</p>
                        </div>
                    </section>

                    {/* Section 15 */}
                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-medium">15. NON-SOLICITATION</h2>
                        <div className="flex flex-col gap-2 opacity-80 leading-relaxed">
                            <p>The Client shall not hire SPH personnel during the Agreement and for 12 months thereafter.</p>
                            <p>Breach results in a fee equal to 12 months’ gross compensation.</p>
                        </div>
                    </section>

                    {/* Section 16 */}
                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-medium">16. FORCE MAJEURE</h2>
                        <div className="flex flex-col gap-2 opacity-80 leading-relaxed">
                            <p>SPH is not liable for delays caused by events beyond reasonable control including SaaS outages, cyber incidents or governmental actions.</p>
                        </div>
                    </section>

                    {/* Section 17 */}
                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-medium">17. GOVERNING LAW</h2>
                        <div className="flex flex-col gap-2 opacity-80 leading-relaxed">
                            <p>This Agreement is governed by the laws of Scotland.</p>
                            <p>Scottish courts have exclusive jurisdiction.</p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};
