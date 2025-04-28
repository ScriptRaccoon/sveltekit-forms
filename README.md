# SvelteKit Reactivity without Client-Side JavaScript

This project demonstrates how to achieve reactivity in SvelteKit applications without relying on client-side JavaScript. The application state is encoded in the URL, and any required JavaScript logic is executed on the server using form actions.

<https://sveltekit-forms.netlify.app/>

This approach has many advantages:

-   Users can use the site without having to download JS, which is especially important when bandwidth is low.
-   Users can pass on links or save them for themselves and the website is exactly the same when the link is opened.
-   The code becomes simpler.
-   You use the platform (HTTP + HTML).
-   Better SEO
