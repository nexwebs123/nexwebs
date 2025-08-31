export default function Loading() {
  return (
    <section className="max-w-screen relative my-24 md:my-32 flex justify-center items-center">
      <div
        className="animate-spin inline-block size-8 border-3 border-current border-t-transparent text-orange-600 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </section>
  );
}
