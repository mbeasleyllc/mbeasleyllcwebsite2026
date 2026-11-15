import React from "react";
import ArticleLayout, { H2, P, UL, LI } from "@/components/insights/ArticleLayout";
import { getInsight } from "@/lib/insights";

const insight = getInsight("future-of-work")!;

/**
 * "What AI agents actually change about work."
 *
 * Written to be useful to a sceptical reader. No capability claims beyond what
 * the tools reliably do, and no prediction dressed up as a finding.
 */
export default function Page() {
  return (
    <ArticleLayout insight={insight}>
      <P>
        There are two ways to talk about AI at work, and both are unhelpful. The
        first says it will replace everyone. The second says it is a parlour
        trick that cannot be trusted with anything. The truth is narrower and
        more practical than either: agents are extremely good at a specific
        shape of work, and they fail in predictable ways outside it.
      </P>
      <P>
        If you can tell which shape your work is, you can decide what to hand
        over. That is the whole skill.
      </P>

      <H2>The shape agents handle well</H2>
      <P>
        Look for work you would describe to a new starter in a few sentences,
        where the rules do not change much and the output is text, a
        classification, or a filled-in field. That is the shape.
      </P>
      <UL>
        <LI>
          Reading something and pulling structured facts out of it — an enquiry
          email into a name, a need and a deadline.
        </LI>
        <LI>
          Sorting and routing — deciding which of four inboxes a message belongs
          in, and saying why.
        </LI>
        <LI>
          Drafting the first version — a reply, a summary, a description, a
          follow-up that a person then edits.
        </LI>
        <LI>
          Checking consistency — does this record agree with that one, is
          anything obviously missing, does this look like the other fifty.
        </LI>
      </UL>
      <P>
        Notice what these have in common: they are bounded, repetitive and
        verifiable. Someone can look at the output and tell in seconds whether it
        is right. That last property matters more than it sounds.
      </P>

      <H2>Where they fail, and why it is predictable</H2>
      <P>
        Agents do not fail randomly. They fail at the edges of their
        instructions, and they fail confidently, which is worse than failing
        loudly.
      </P>
      <UL>
        <LI>
          <strong>Judgement with consequences.</strong> Deciding whether a
          donation is restricted, whether a complaint needs escalating, whether a
          refund is warranted — these need someone who can be held to the answer.
          An agent cannot be.
        </LI>
        <LI>
          <strong>Anything genuinely ambiguous.</strong> If two people in your
          team would resolve the same case differently, the rule is not written
          down, and the agent is guessing. It will guess plausibly.
        </LI>
        <LI>
          <strong>Situations that are rare and high-stakes.</strong> The cases
          that matter most are usually the ones that happen least, which means
          they are exactly the cases with no pattern to learn from.
        </LI>
        <LI>
          <strong>Anything where being wrong is invisible.</strong> If nobody
          checks, an agent that is right most of the time is a slow-motion
          problem, because the failures accumulate quietly.
        </LI>
      </UL>

      <H2>The unit of change is the task, not the role</H2>
      <P>
        This is where most workplace conversations go wrong. &ldquo;Will AI
        replace my job?&rdquo; is not answerable, because a job is a bundle of
        tasks and only some of them are the right shape.
      </P>
      <P>
        A development officer&rsquo;s week includes writing thank-you notes,
        updating records, preparing reports, and sitting with a donor working out
        what they care about. Three of those are the right shape for an agent.
        The fourth is the entire reason the role exists, and no agent is coming
        for it.
      </P>
      <P>
        So the useful question is not which roles change. It is: which tasks in
        this role are bounded and verifiable, and what would the person do with
        the time if those went away? If the honest answer is &ldquo;the same
        work, but we would need fewer people,&rdquo; that is a real decision to
        make deliberately. If the answer is &ldquo;they would finally do the
        part we hired them for,&rdquo; that is the better outcome, and it is more
        common than the first.
      </P>

      <H2>A test you can apply this week</H2>
      <P>
        Pick one repetitive task. Write down the rules you would give a new
        starter. Then read them back and ask two questions.
      </P>
      <UL>
        <LI>
          Would two competent people follow these rules and produce the same
          answer? If not, the rules are incomplete, and an agent will fill the
          gap silently.
        </LI>
        <LI>
          Would anyone notice if the output were subtly wrong? If not, you are
          not ready to automate it yet — not because the technology cannot, but
          because you cannot tell whether it worked.
        </LI>
      </UL>
      <P>
        If both answers are favourable, that task is a candidate. Start there,
        keep a human reviewing the output for the first weeks, and watch whether
        the reviewer is catching real errors or just confirming. That tells you
        when to stop watching.
      </P>

      <H2>What actually changes</H2>
      <P>
        Not headcount, in most organisations. What changes is where the human
        attention goes. The dull, bounded, repetitive middle of the work thins
        out, and the judgement, relationships and accountability — the parts that
        were always the point — get more time than they have had in years.
      </P>
      <P>
        That is a smaller claim than the headlines make. It is also the one that
        holds up when you try it.
      </P>
    </ArticleLayout>
  );
}
