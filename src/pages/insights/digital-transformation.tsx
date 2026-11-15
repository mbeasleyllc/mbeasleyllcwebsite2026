import React from "react";
import ArticleLayout, { H2, P, UL, LI } from "@/components/insights/ArticleLayout";
import { getInsight } from "@/lib/insights";

const insight = getInsight("digital-transformation")!;

/**
 * "Digital transformation without the theatre."
 *
 * Deliberately carries no statistics and no client results: the firm has no
 * published case studies yet, and inventing either would be the exact thing the
 * article argues against.
 */
export default function Page() {
  return (
    <ArticleLayout insight={insight}>
      <P>
        Ask most organisations what their digital transformation project involves
        and you will get a list of software. A new CRM. A new finance system. A
        new intranet nobody will use. The list is almost always products, because
        products are the thing you can put on a purchase order and point at in a
        board meeting.
      </P>
      <P>
        But the work does not live in the products. It lives in the gaps between
them, and that is where nearly every project I have seen goes wrong.
      </P>

      <H2>Buying software is not connecting systems</H2>
      <P>
        Here is the distinction that matters, and it is worth being blunt about
        it. Buying software changes what your team looks at. Connecting systems
        changes what your team has to do. Only the second one reduces work.
      </P>
      <P>
        A new donor system that does not talk to your email platform has not
        removed any work. It has moved work. Someone now has to export a list,
        clean it, and import it somewhere else. They will do that every
        week, forever, and it will never appear on any project plan.
      </P>
      <P>
        This is why projects can be declared a success and still feel worse six
        months later. Every individual system did what the vendor promised. The
        organisation is doing more manual work than before, because there are now
        more places for information to get stuck.
      </P>

      <H2>The failure point is the join</H2>
      <P>
        Think of your operation as a series of handoffs. A form submission
        becomes a contact. A contact becomes a donation. A donation becomes a
        receipt. A receipt becomes a thank-you. Each arrow is a join, and each
        join is either automatic or somebody&rsquo;s job.
      </P>
      <P>
        Projects focus on the boxes and ignore the arrows. But the arrows are
        where the time goes, where the errors happen, and where the truth about
        your operation actually lives. A system that holds the right data but
        cannot pass it on is a filing cabinet with better marketing.
      </P>
      <P>
        So when someone asks whether a transformation is working, the useful
        question is not &ldquo;is the new system live?&rdquo; It is &ldquo;which
        handoffs stopped being manual, and how many new ones did we create?&rdquo;
      </P>

      <H2>Find your worst joins in an afternoon</H2>
      <P>
        You do not need a consultant, a workshop or a budget to do this. You need
        a whiteboard and an honest hour with the people who do the work.
      </P>
      <UL>
        <LI>
          List every time information has to move from one system to another, or
          from a system to a person.
        </LI>
        <LI>
          For each one, write how it happens today: exported and re-typed,
          emailed as an attachment, copied from a screen, printed and filed,
          remembered.
        </LI>
        <LI>
          Mark how often it happens. Daily is different from quarterly, and
          both matter differently than you would guess.
        </LI>
        <LI>
          Mark what breaks when it goes wrong: a delay, a duplicate, a missed
          receipt, a donor who gets thanked twice or not at all.
        </LI>
      </UL>
      <P>
        That list is your actual transformation backlog. It will be shorter than
        you expect and more uncomfortable than you expect, because the worst
        joins are usually the ones everyone has quietly built their week around.
      </P>

      <H2>Then fix them in the right order</H2>
      <P>
        Work from the most frequent and most damaging backwards. A daily handoff
        that occasionally loses a donor record beats a quarterly report that
        takes a day to assemble. Frequency multiplied by consequence is the only
        ordering that survives contact with a real budget.
      </P>
      <P>
        And prefer fixes that stand on their own. A step that only delivers value
        after the next three steps are finished is not a phase, it is a bet. If the budget stops halfway, you are left with cost and no benefit.
        Each piece should make something better the week it ships.
      </P>

      <H2>What this means for the software decision</H2>
      <P>
        None of this argues against buying software. It argues for buying it
        second. Start from the handoffs, decide which ones you are going to
        eliminate, and only then ask what tooling that requires. Sometimes the
        answer is a new system. Often it is a connection between two you already
own. Occasionally it is deleting a step entirely, which costs
        nothing and is the best outcome available.
      </P>
      <P>
        The theatre of transformation is the launch announcement. The substance
        is the week after, when someone notices they no longer do the thing they
        used to dread. Aim for that, and the rest follows.
      </P>
    </ArticleLayout>
  );
}
