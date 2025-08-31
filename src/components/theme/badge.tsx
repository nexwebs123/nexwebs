export function Badge({ title }: { title: string }) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="px-4 py-2 rounded-full flex justify-center items-center gap-x-2 border text-sm font-medium bg-orange-500/10 text-orange-600 border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-400/30 backdrop-blur-sm mb-6 sm:mb-12 animate-pulse">
        <p>{title}</p>
      </div>
    </div>
  );
}
