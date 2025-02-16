document.addEventListener("DOMContentLoaded", () => {
  const instagramPosts: string[] = [
    "https://www.instagram.com/p/DFtFTOSRUkm/",
    "https://www.instagram.com/p/DFFtsS6xnl_/",
    "https://www.instagram.com/p/DCfCtTYRINh/",
  ];

  const feedContainer = document.getElementById("instagram-feed");

  if (!feedContainer) {
    console.error("Instagram feed container not found");
    return;
  }

  if (instagramPosts.length === 0) {
    const message: HTMLParagraphElement = document.createElement("p");
    message.textContent = "Check back later for my latest creations!";
    message.className = "no-instagram-posts";
    feedContainer.appendChild(message);
    return;
  }

  instagramPosts.forEach((post: string) => {
    const embed: HTMLElement = document.createElement("blockquote");
    embed.className = "instagram-media";
    embed.setAttribute("data-instgrm-permalink", post);
    embed.setAttribute("data-instgrm-version", "14");

    feedContainer.appendChild(embed);
  });

  // Type assertion for window.instgrm
  interface InstagramEmbed {
    Embeds: {
      process: () => void;
    };
  }

  const instagramGlobal = window as unknown as { instgrm?: InstagramEmbed };

  if (!instagramGlobal.instgrm) {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  } else {
    instagramGlobal.instgrm.Embeds.process();
  }
});
