export default function SocialButton({ src, title, className }) {
    return (
        <button className={`group w-12 hover:w-32 h-12 relative rounded glass-md text-gray-900 dark:text-gray-200 shadow-primary duration-700 font-medium flex justify-start gap-2 items-center p-2 hover-pr-6 ${className}`}>
            <img src={src} alt="" className="w-8 h-8 shrink-0 fill-neutral-50 inline-block" />
            <span className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">{title}</span>
        </button>
    );
}
