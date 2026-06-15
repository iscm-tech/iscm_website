# Admin CMS User Guide

## 1. Purpose

The Admin CMS is used by authorized administrators and editors to manage website content. It supports post management, people/team updates, review of pending portal content, and image/media upload.

This guide describes practical content-management tasks. It does not cover backend or database administration.

## 2. Target Users

This guide is intended for:

- website administrators;
- authorized content editors;
- staff responsible for posts and events;
- staff responsible for people/team information; and
- reviewers responsible for pending portal content.

## 3. Access Requirements

Users need:

- an approved Admin CMS account;
- content-management permission;
- account creation or permission changes approved by the assigned IT / Website administrator;
- access to https://iscm.ueh.edu.vn/admins;
- a supported browser; and
- an active internet connection.

Admin CMS access is separate from normal public website access. Internal portal access does not automatically grant Admin CMS permission. New admin/editor accounts must be created by an existing authenticated admin account/token, so the final IT / Website administrator responsible for this process should be assigned during handover.

## 4. Login Instructions

1. Open https://iscm.ueh.edu.vn/admins.
2. Enter the approved username.
3. Enter the approved password.
4. Select **Login**.
5. Wait for the dashboard to load.

_Screenshot to add before final export: Admin CMS login page._

After login, the system validates the session. If the session is valid, it redirects to the Admin dashboard. If validation fails, the user is returned to the login page.

Do not include real admin credentials in this guide or in screenshots.

## 5. Dashboard Overview

The dashboard provides:

- a sidebar for content categories;
- a default list of pending portal content;
- content tables with language, visibility, author, and publish information;
- row action menus;
- links to add or edit content; and
- a logout control.

Current sidebar labels include:

- **ISCM Life**;
- **Student Life**;
- **Events**;
- **Expert Insights**;
- **Open Admission**;
- **Members**;
- **Advisory**;
- **Adjunct Professors**; and
- **Glocal Experts**.

Visible options may vary according to the deployed version and permissions.

_Screenshot to add before final export: Admin CMS dashboard and sidebar._

## 6. Managing Posts and Public Content

### Create a post

1. Select the required content category from the sidebar.
2. Select the add icon beside the category, when available.
3. Choose or confirm the content language.
4. Enter the required title, metadata, publish information, author, and other displayed fields.
5. Add the main body using the rich-text editor.
6. Upload the required thumbnail and content images.
7. Complete any category-specific options.
8. Review the content.
9. Submit/save the post.
10. Open the public page in a new tab and verify the result.

### Edit a post

1. Open the category list.
2. Find the post by title, ID, language, or date.
3. Open the row action menu.
4. Select **Edit**.
5. Update the required fields.
6. Replace images only when needed.
7. Submit/save the changes.
8. Verify the public page.

### Hide or show a post

1. Open the row action menu.
2. Select **Hide** to remove a visible item from public display, or **Show** to restore it.
3. Confirm the visibility icon/state in the list.
4. Verify the public page.

### Delete a post

1. Confirm that the item is no longer required.
2. Record or export any content that must be retained.
3. Open the row action menu.
4. Select **Delete**.
5. Verify that the item has been removed.

Deletion should be treated as a controlled action because recovery depends on the external backend or available backups.

### UI labels and content keys

The CMS may display user-facing labels that differ from service keys. For example:

- **ISCM Life** is managed through the news content area.
- **Expert Insights** is managed through the evolving-research content area.
- **Glocal Experts** is presented through the network/people area.

Use the visible CMS labels for daily work. Technical service keys are documented separately in `docs/04_API.md`.

## 7. Managing People/Team Information

The People section may include Members, Advisory, Adjunct Professors, and Glocal Experts.

### Update a person record

1. Open the relevant People category.
2. Find the person by name or ID.
3. Open the row action menu.
4. Select **Edit**.
5. Review the displayed name, title, order, biography, interests, image, and other available fields.
6. Upload a replacement image only when necessary.
7. Save the changes.
8. Verify the corresponding public people/team page.

Some people categories or actions may be read-only or unavailable in the deployed version. Do not assume that every visible menu label supports create, hide, or delete operations.

## 8. Managing Pending Portal Content

Pending portal content appears on the main Admin dashboard.

The table can include:

- ID;
- title;
- publish date;
- author;
- language; and
- portal categories.

Available actions include:

- **Edit**: review or correct pending content;
- **Accept**: approve the pending item for publication; and
- **Reject**: remove/reject the pending item.

### Review and accept

1. Open the pending item.
2. Verify title, body, language, author, date, category, links, and images.
3. Correct the item if required.
4. Select **Accept** only after review is complete.
5. Refresh the dashboard and verify that the item leaves the pending list.
6. Verify the published content on the website.

### Reject

1. Confirm that rejection is appropriate.
2. Record the reason through the approved team communication process.
3. Select **Reject**.
4. Verify that the item leaves the pending list.

_Screenshot to add before final export: pending content list and action menu._

## 9. Uploading Images and Media

The CMS supports image uploads for thumbnails and rich-text content.

The rich-text editor can also provide:

- headings;
- font selection;
- bold, italic, and underline;
- links;
- embedded images;
- YouTube embeds;
- text alignment;
- bullet and numbered lists; and
- clear-formatting controls.

### Image upload guidance

- Use image files only where the field requests an image.
- Use descriptive filenames.
- Avoid unnecessarily large files.
- Confirm that the image is appropriate for public or internal use.
- Confirm that the thumbnail displays correctly.
- Add images in the correct language version when localized content differs.
- Wait for save/upload completion before leaving the page.
- Do not upload confidential or unlicensed media.

Some content that is also submitted to an external portal may require additional portal thumbnail or background images. Complete all fields shown by the CMS.

_Screenshot to add before final export: rich-text editor toolbar._

_Screenshot to add before final export: thumbnail and image upload fields._

## 10. Publishing Checklist

Before saving, approving, or publishing content, confirm:

- correct content category;
- correct language;
- accurate title;
- correct author;
- correct publish date;
- complete body content;
- correct links;
- valid thumbnail;
- images load and have appropriate content;
- formatting is readable on desktop and mobile;
- spelling and grammar are reviewed;
- visibility state is correct;
- external portal options are correct, if shown;
- no confidential information is included; and
- the public page is verified after publication.

## 11. Common Issues

### Login returns to the login page

- Re-enter the approved credentials.
- Clear stale site cookies.
- Confirm that the account still has permission.
- Contact Website administrator / Technical Team without sending the password.

### Content list does not load

- Refresh the page.
- Confirm internet access.
- Check whether other categories load.
- Report the category and time of failure.
- The external backend API may be unavailable.

### Save or upload fails

- Confirm all required fields are completed.
- Confirm the selected file is an image.
- Retry with a smaller image.
- Keep the editor open until the request completes.
- Report any visible error message to Website administrator / Technical Team.

### Published content is not visible

- Check the visibility/draft state.
- Confirm the correct language.
- Refresh the public page.
- Clear browser or hosting cache if applicable.
- Confirm the correct production domain.

### Pending item cannot be accepted

- Re-open the item and verify required content.
- Confirm the session has not expired.
- Confirm the external backend is available.
- Report the item ID and language to Website administrator / Technical Team.

## 12. Security and Content Governance Notes

- Do not share Admin CMS accounts.
- Use only approved accounts and permissions.
- Do not include credentials in screenshots or support messages.
- Review content before publication.
- Follow institutional approval rules for sensitive announcements.
- Use licensed or institution-owned media.
- Do not publish personal or confidential information without approval.
- Treat deletion and rejection as controlled actions.
- Sign out after completing work, especially on shared computers.
- Report suspected account compromise immediately.
- Backend and database operations must be handled by their external owners.

## 13. Support Contact

| Support item | Contact |
|---|---|
| Admin account approval | IT / Website administrator `[To be assigned]` |
| Content approval/governance | Website administrator / Technical Team |
| CMS operational support | Website administrator / Technical Team |
| External backend/API support | Technical Team / same owner-team as frontend, using separated backend repository |
| Hosting/deployment support | UEH shared hosting owner / Technical Team |
| Support email | `[To be confirmed]` — to be filled after the final responsible person/team is assigned |
| Support phone/channel | ISCM PR Community group (temporary support channel) |

Before export, confirm the final support email and replace the temporary support channel if a dedicated technical support group is created.
