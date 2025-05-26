import Link from "next/link";

export default function NotFoundScreen() {
  return (
    <div className="flex flex-1 bg-white">
      <div className="flex flex-col flex-1 items-center justify-center p-8 h-screen">
        <div className="flex flex-col items-center max-w-md">
          <h2 className="text-9xl font-bold text-primary opacity-20 mb-6">
            404
          </h2>
          <h3 className="text-2xl font-bold text-black mb-4 text-center">
            Oops! Page Not Found
          </h3>
          <p className="text-base text-gray-600 text-center mb-8 leading-6">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link href="/" className="bg-primary py-4 px-8 rounded-lg">
            <p className="text-white text-base font-semibold">Return to Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
