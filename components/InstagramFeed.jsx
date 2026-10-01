import Link from "next/link";
import Script from "next/script";

export const InstagramFeed = () => {
  return (
    <>
      <behold-widget feed-id="j6DxJkHa1BbjBG6QMqL7"></behold-widget>
      <Script
        src="https://w.behold.so/widget.js"
        type="module"
        strategy="afterInteractive"
      />
      <div style={{ paddingTop: "10px" }}>
        From{" "}
        <Link href="https://www.instagram.com/805origami/">
          instagram@805origami
        </Link>
      </div>
    </>
  );
};
