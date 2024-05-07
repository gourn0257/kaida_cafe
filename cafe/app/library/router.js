'use client';

const { useRouter } = require("next/navigation");

function SendRoute(url) {
  const router = useRouter();
  router.push(url)
  router.refresh();
}

export { SendRoute }