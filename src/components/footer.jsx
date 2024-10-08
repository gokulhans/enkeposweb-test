export default function Footer() {
  return (
    <footer className="bg-gray-50 text-black py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">EPOS</h2>
            <p className="text-sm">
              © {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
