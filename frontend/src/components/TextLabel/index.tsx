export default function TextLabel(props: TextLabelProps) {
    return (
        <div className={props.className}>
            <p className="text-black font-bold">{props.label}</p>
            <p className="text-black text-lg">{props.text}</p>
        </div>
    )
}

interface TextLabelProps {
    label: string;
    text: string;
    className?: string;
}