import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <script type="application/ld+json"> */}
          {/* {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Business",
            "headline": "Moss Dekk AS",
            "image": ["https://www.google.com/maps/place/Moss+Dekk+AS/@59.4600127,10.6885169,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOtBMWeLwy-HssJUQ05weXLwprIZmSUbmgGifLs!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOtBMWeLwy-HssJUQ05weXLwprIZmSUbmgGifLs%3Dw114-h86-k-no!7i3999!8i3000!4m17!1m9!3m8!1s0x43ecb0713fc19099:0xf0c938655e220549!2sMoss+Dekk+AS!8m2!3d59.4595132!4d10.6886308!9m1!1b1!16s%2Fg%2F11b75mnnxh!3m6!1s0x43ecb0713fc19099:0xf0c938655e220549!8m2!3d59.4595132!4d10.6886308!10e5!16s%2Fg%2F11b75mnnxh?hl=no&entry=ttu#"],
            "datePublished": "2024-8-21",
            "author": {
              "@type": "Person",
              "name": "Moss Dekk AS",
            },
          })} */}
        {/* </script> */}
        <title>Moss Dekk AS Tire Sales Company</title>
        <meta name="description" content="Welcome to Moss Dekk AS. Norway's first fully automated tire sales. Order - Pay - Exchange with a few simple keystrokes." />
        <meta name="keywords" content="Tires, website, nextjs, Tire sales company, High quality,Moss Dekk AS,  Tyre Services Moss, Tyre Shop Moss" />
        {/* <link rel="canonical" href="https://www.mywebsite.com/" /> */}
        <link rel="canonical" href="http://www.boltz.no/" />
        {/* <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="URL to your image" />
        <meta property="og:url" content={`https://www.mywebsite.com/posts/${id}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="URL to your image" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
