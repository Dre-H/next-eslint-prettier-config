export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-2 text-3xl font-bold">
        ESLint &amp; Prettier Config Example
      </h1>
      <p className="mb-4 max-w-xl text-center text-lg">
        This repository is a public template for sharing a modern{" "}
        <span className="font-bold">ESLint</span> and{" "}
        <span className="font-bold">Prettier</span> configuration for Next.js,
        React, and Tailwind CSS projects.
        <br />
        <br />
        <span className="font-grotesk">
          Edit <code>eslint.config.mjs</code> and <code>.prettierrc</code> to
          fit your needs.
        </span>
      </p>
      <a
        href="https://github.com/shakurt/nuxt-eslint-prettier-config"
        className="font-medium text-blue-600 underline hover:text-blue-800"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>
    </main>
  );
}
