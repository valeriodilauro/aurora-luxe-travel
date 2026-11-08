export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-heading text-8xl font-bold bg-aurora-gradient bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="font-heading text-2xl font-bold text-white mb-4">
          Destination Not Found
        </h2>
        <p className="font-body text-aurora-muted mb-8 max-w-md">
          The page you're looking for seems to have wandered off into the unknown. Let us guide you back.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-aurora bg-aurora-gradient text-white font-body font-medium"
        >
          Return Home
        </a>
      </div>
    </main>
  );
}
