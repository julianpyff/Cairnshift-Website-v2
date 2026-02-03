import { PhaseItem } from "./PhaseItem";
import knowledgeEngineImg from "../../../assets/knowledge_engine.png";
import activationEngineImg from "../../../assets/activation_engine.png";
import revenueEngineImg from "../../../assets/revenue_engine.png";
import gtmSystemImg from "../../../assets/gtm_system.png";

export const FrameWrapper = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center pt-0 pb-14 px-0 relative w-full bg-[#ffffff]">
      <PhaseItem
        className="rounded-t-3xl"
        timeline="MONTH 01"
        title="Research & Positioning"
        imageTitle="Knowledge Engine"
        imageSrc={knowledgeEngineImg}
        whatHappens={[
          {
            title: "Deep market research",
            description: "Competitors, alternatives, ecosystem mapping, market positioning. AI agents comb through news, podcasts, reviews, and case studies to understand the landscape."
          },
          {
            title: "ICP refinement",
            description: "Your Ideal Customer Profile gets defined with real data, not assumptions. What size companies? Which industries? Which roles make buying decisions? What problems do they have budget to solve?"
          },
          {
            title: "Positioning and messaging",
            description: "Validated with friendly customers and real conversations, not pulled from thin air."
          },
          {
            title: "Asset alignment",
            description: "Website, pitch decks, LinkedIn profiles, and sales collateral get refreshed so everything speaks the same language."
          }
        ]}
        theResult={[
          "A structured knowledge base that AI agents can query so every email, call prep, and reply draws from it",
          "Sales assets that land with prospects",
          "Clear targeting: who to reach, why they'll care, how to find them"
        ]}
        deliverables="Market research report, ICP documentation, positioning framework, refreshed sales assets. All yours to keep."
      />

      <PhaseItem
        timeline="MONTH 02 - 03"
        title="Activation & Tooling"
        imageTitle="Activation Engine"
        imageSrc={activationEngineImg}
        whatHappens={[
          {
            title: "Tiered enrichment",
            description: "A budget-protecting waterfall. Cheap firmographic checks first, then AI validation for qualitative fit, then deep research to filter out high value targets."
          },
          {
            title: "Ghost Profile discovery",
            description: "Besides our 25 data provides the engine can find persona’s who aren't active on LinkedIn by scraping company sites, blogs, forums, and news."
          },
          {
            title: "Multi-source activation",
            description: "Act on real buying signals: intent data showing who's researching solutions like yours, event attendance, funding announcements, job changes, social engagement. Reach out when there's a reason, not randomly."
          },
          {
            title: "Campaign execution",
            description: "Continuous A/B testing of messaging and channels. What works gets scaled, what doesn’t gets killed."
          }
        ]}
        theResult={[
          "A qualified pipeline of prospects who have reasons to care, and infrastructure that scales."
        ]}
        deliverables="Prospect activation system, enriched target lists, campaign templates, performance dashboard."
      />

      <PhaseItem
        timeline="MONTH 03 - 05"
        title="Sales Execution"
        imageTitle="Revenue Engine"
        imageSrc={revenueEngineImg}
        whatHappens={[
          {
            title: "Reply Agent",
            description: "When a prospect replies, AI pulls full conversation history, queries your knowledge base, and drafts a context-aware response. Generated drafts appear in your drafts folder for review, regardless of your email client."
          },
          {
            title: "Call Prep Agent",
            description: "Delivers a briefing before every meeting: conversation history, company research, 3 to 5 hooks based on your sales playbook, recommended talking points. Reply to the email to ask follow-up questions. It has full context loaded."
          },
          {
            title: "Post-Meeting Agent",
            description: "Every interaction gets transcribed, whether online, phone, or even voice notes from in-person meetings. You get follow-up email drafts, researched answers to unanswered questions, and next-step recommendations. The agent adapts to deal stage: detailed follow-ups after discovery calls, draft proposals after technical deep-dives."
          },
          {
            title: "Sales playbook development",
            description: "Our team co-runs the first discovery calls. What works gets documented and built into a structured playbook. When objections come up, responses get added. When new patterns emerge, the playbook gets updated."
          },
          {
            title: "Multi-channel re-activation",
            description: "If email goes cold, shift to LinkedIn. If LinkedIn doesn't work, try WhatsApp or phone. Never lose a deal because you got stuck in one blocked channel."
          }
        ]}
        theResult={[
          "Sales reps moving faster with less time on admin and more time selling",
          "Higher close rates from better prep, faster follow-up, and consistent messaging",
          "Playbooks that new hires can follow from day one",
          "A system that learns from every interaction"
        ]}
        deliverables="AI agents embedded in your workflow, documented sales playbooks, call transcription system, multi-channel orchestration."
      />

      <PhaseItem
        timeline="MONTH 06+"
        title="RevOps Intelligence"
        imageTitle="Combined Engines"
        imageSrc={gtmSystemImg}
        whatHappens={[
          {
            title: "Unit economics",
            description: "Hard data on cost per discovery call, stage-by-stage drop-offs, and true channel ROI (cost per closed deal)."
          },
          {
            title: "Win/loss analysis",
            description: "Mining closed deals to see what actually drives decisions—price, features, or timing—and feeding that back into targeting."
          },
          {
            title: "Conversation-to-content loops",
            description: "Surfacing the actual language prospects use in calls to rewrite your positioning and assets."
          },
          {
            title: "Strategic partnership",
            description: "Leadership deep-dives on pipeline health, market signal synthesis, and validating new markets before you commit resources."
          }
        ]}
        theResult={[
          "A growth engine that gets smarter every month as data compounds, playbooks improve, and targeting sharpens",
          "Strategic counsel that turns data into direction instead of just dashboards to watch",
          "The ability to spin up new markets or verticals without starting from scratch because infrastructure is already in place"
        ]}
        deliverables="Unit economics reporting, win/loss analysis framework, updated playbooks and positioning, ongoing strategic advisory. The Knowledge Engine keeps growing. Each month's data makes the next month smarter."
      />
    </div>
  );
};
