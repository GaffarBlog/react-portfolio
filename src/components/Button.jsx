export default function Button({ title, type = "primary" }) {
    let btn_class = "";
    switch (type) {
        case "outline":
            btn_class = "border border-primary text-primary bg-transparent hover:bg-primary hover:text-white";
            break;

        default:
            btn_class = "bg-primary text-white";
            break;
    }
    return <button className={`${btn_class}  px-6 py-3 rounded-md font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer`}>{title}</button>;
}
