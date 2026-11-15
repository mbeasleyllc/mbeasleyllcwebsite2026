/**
 * SuiteDash form configuration.
 *
 * The form on /contact is Mike's SuiteDash "Let's talk" form, embedded so every
 * completed submission lands in SuiteDash and can trigger an automation there.
 * That replaces the nodemailer path in /api/contact, which needed SMTP
 * credentials to be set in Hostinger before it would do anything.
 *
 * IMPORTANT — three different URLs, only one of which works here.
 *
 *   /frm/21SNLBNW3uzVkf        the admin path. 302s to /site/login, and the
 *                              login page sends `X-Frame-Options: DENY`, so a
 *                              frame around it renders blank.
 *   /frm/21SNLBNW3uzVkfnGP.js  the embed script. Creates the iframe itself,
 *                              but hardcodes height=600 and gives no control
 *                              over the loading or fallback states.
 *   /frm/21SNLBNW3uzVkfnGP     the PUBLIC form endpoint. 200, no X-Frame-Options
 *                              header, and the real form (title "…Lets Talk!
 *                              Form"). This is the one to frame.
 *
 * The public token is the admin id plus the `nGP` suffix — easy to miss, and
 * the reason the admin URL appeared to be the form when it is not.
 */

/** Public form endpoint — frameable, no X-Frame-Options. */
export const SUITEDASH_FORM_URL =
  "https://secure.mbeasleyllc.com/frm/21SNLBNW3uzVkfnGP";

/**
 * Where SuiteDash posts its messages from. The embed script refuses messages
 * from any other origin, so we do the same.
 */
export const SUITEDASH_ORIGIN = "https://secure.mbeasleyllc.com";

/**
 * The admin link, used only for the "open in a new tab" fallback so a visitor
 * is never stuck if framing is blocked or SuiteDash is slow.
 */
export const SUITEDASH_FALLBACK_URL =
  "https://secure.mbeasleyllc.com/frm/21SNLBNW3uzVkfnGP";

/**
 * Frame height in px.
 *
 * Measured, not guessed: at the wrapper's 663px width the form's content ends
 * at 694px (4 fields — first name, last name, email, phone — plus SUBMIT).
 * SuiteDash's own embed script hardcodes 600, which clips the submit button;
 * 900 was my first attempt and left 170px of dead white space. 800 clears the
 * content on desktop and gives narrow viewports some room, where the fields
 * reflow taller and the frame scrolls internally.
 */
export const SUITEDASH_FORM_HEIGHT = 800;

/** True once a public embed URL has been configured. */
export const hasSuiteDashForm = Boolean(SUITEDASH_FORM_URL);
