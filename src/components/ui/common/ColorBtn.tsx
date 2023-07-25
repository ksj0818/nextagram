type Props = {
  text: string;
  onClick: () => void;
  size?: "small" | "big";
};

export default function ColorBtn({ text, onClick, size = "small" }: Props) {
  return (
    <div
      className={`rounded-md  bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 ${
        size === "big" ? "p-[0.3rem]" : "p-[0.15rem]"
      }`}
    >
      <button
        className={`text-base transition-all bg-white rounded-sm hover:opacity-90 ${
          size === "big" ? "py-4 px-8 text-2xl" : "text-base p-[0.3rem]"
        }`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
