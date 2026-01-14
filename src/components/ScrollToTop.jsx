export default function ScrollToTop() {
    return (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`fixed bottom-6 right-6 w-12 h-12 bg-primary dark:bg-primary backdrop-blur-md text-white rounded-full shadow-lg border border-white/20 flex items-center justify-center hover:bg-primary/70 transition-colors cursor-pointer !rounded-button`}>
            <i className="fas fa-arrow-up"></i>
        </button>
    );
}
