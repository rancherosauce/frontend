import Head from "next/head";

export default function CustomHead({ pageProps }) {
  return (
    <Head>
      <meta
        name="viewport"
        // Support responsive mobile sizes
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <link rel="shortcut icon" href="favicon.ico" />
      <script
        // TODO - is this needed?
        // Support React Dev Tools
        dangerouslySetInnerHTML={{
          __html: ` var DEV_TOOLS = window.__REACT_DEVTOOLS_GLOBAL_HOOK__; if (typeof DEV_TOOLS === "object") DEV_TOOLS.inject = function () {}; `,
        }}
      />
      <script
        // Create a CSS variable to store the current pixel height of the window
        dangerouslySetInnerHTML={{
          __html: ` var doc = document.documentElement; function calcVh() { doc.style.setProperty("--100vh", window.innerHeight + "px"); } window.addEventListener("resize", calcVh); calcVh(); `,
        }}
      />
    </Head>
  );
}
