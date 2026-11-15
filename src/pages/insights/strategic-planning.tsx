import React from "react";
import ArticleLayout, { H2, P, UL, LI } from "@/components/insights/ArticleLayout";
import { getInsight } from "@/lib/insights";

const insight = getInsight("strategic-planning")!;

/**
 * "Strategic planning for systems, not software."
 *
 * The argument is that a systems plan outlives a software plan. Kept free of
 * invented benchmarks and client stories, for the same reason as the others.
 */
export default function Page() {
  return (
    <ArticleLayout insight={insight}>
      <P>
        Most technology plans are really software plans wearing a strategy
        costume. They name products, versions and vendors, and they go stale the
        moment one of those vendors changes its pricing, gets acquired, or
        discontinues the tier you built on.
      </P>
      <P>
        A systems plan is a different document. It describes how information
        moves through your organisation, which handoffs are automatic and which
        are somebody&rsquo;s job, and what you intend to do about that. It
        survives a vendor change because it never depended on the vendor in the
        first place.
      </P>

      <H2>Plan the flow, not the tools</H2>
      <P>
        The instinct to plan in products is understandable. Products have prices,
        so they fit in a budget, and they have names, so they fit in a sentence.
        Flows have neither, which is why they get skipped — and why the plan
        fails.
      </P>
      <P>
        Try it the other way. For each thing your organisation does repeatedly,
        write the journey of the information rather than the name of the software
        it currently lives in. An enquiry arrives, becomes a contact, gets a
        proposal, becomes a project, generates an invoice, gets paid, gets
        closed. That sequence is stable. Which product sits at each step is not.
      </P>
      <P>
        Now you have something durable. When a tool changes, you re-point one
        step. When a tool&rsquo;s price doubles, you can swap it without
        rewriting the plan, because the plan was never about the tool.
      </P>

      <H2>Sequence so every step stands alone</H2>
      <P>
        This is the discipline that separates a plan from a wish. Every phase
        should deliver something useful in the week it ships, independent of
        whether the next phase ever happens.
      </P>
      <P>
        It is tempting to design a beautiful end state and then slice it into
        phases. Do not. A phase whose value only arrives once three more phases
        are done is not a phase, it is a bet — and if the budget or the appetite
        stops halfway, you are left with the cost and none of the benefit.
      </P>
      <UL>
        <LI>
          Good phase: the enquiry form now writes straight into the CRM, so
          nobody re-types anything. Useful on day one.
        </LI>
        <LI>
          Bad phase: the enquiry form is rebuilt to a new standard, and will pay
          off once the CRM, the email platform and the reporting layer are all
          replaced too.
        </LI>
      </UL>
      <P>
        The test is simple. If you had to stop after this phase and explain why
        it was money well spent, could you? If the honest answer is &ldquo;it
        will be, later,&rdquo; re-cut the phase.
      </P>

      <H2>Decide what you will never automate</H2>
      <P>
        Most plans have a list of things to automate. Very few have a list of
        things that must stay human, and that omission is what makes automation
        projects feel like they are eroding something.
      </P>
      <P>
        Write the second list first, and write it down where people can see it.
        Some candidates:
      </P>
      <UL>
        <LI>
          Any decision where you would have to explain to someone affected why
          the answer came out that way.
        </LI>
        <LI>
          Anything where the relationship is the deliverable — a thank-you that
          matters, a difficult conversation, a first meeting.
        </LI>
        <LI>
          Any judgement you would not delegate to a competent new starter in
          their first month.
        </LI>
      </UL>
      <P>
        This list does two things. It protects the parts of the work that carry
        your reputation, and it makes the automation conversation safe to have —
        people stop defending their whole job when you have already said which
        parts are staying.
      </P>

      <H2>Measure handoffs, not launches</H2>
      <P>
        The usual progress metric is whether the new system is live. That tells
        you almost nothing, because a live system that nobody connected is just a
        more expensive filing cabinet.
      </P>
      <P>
        Count handoffs instead. How many manual transfers of information did we
        have before, and how many do we have now? How long does the most common
        end-to-end journey take today, measured from the moment information
        arrives to the moment the work is done? Those numbers move when the
        project is working and stay flat when it is not, which is exactly what
        you want from a metric.
      </P>

      <H2>What the plan looks like when it is done</H2>
      <P>
        Short. A page for the flows, a page for the phases, a page for the
        never-automate list, and a note on how you will measure. If it is
        longer than that, it has drifted back into being a software plan.
      </P>
      <P>
        And review it when a tool changes, not on an annual cycle. The whole
        advantage of planning the flow is that tool changes are cheap to absorb —
        but only if you actually absorb them rather than waiting for the next
        planning season.
      </P>
    </ArticleLayout>
  );
}
