interface DropDownItemProps {
  id: string;
  title: string;
  edit: (id: string) => void;
}

export default function DropDownItem({ id, title, edit }: DropDownItemProps) {
  return (
    <>
      <p
        id={id}
        onClick={() => edit(id)}
        className="container cursor-pointer px-2 py-3 bg-gray-100"
      >
        {title}
      </p>
    </>
  );
}
