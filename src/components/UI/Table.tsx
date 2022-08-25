export type Heading = {
  label?: string;
  size?: number;
  element?: React.ReactNode;
};

interface TableProps {
  headings: Heading[];
  children: React.ReactNode;
}

export function Table({ headings, children }: TableProps) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse table-fixed text-sm border">
              <thead className="border-b">
                <tr className="bg-gray-100">
                  {headings.map((heading, index) => (
                    <th
                      key={index}
                      className={`px-6 py-4 text-left ${
                        heading.size ? `w-[${heading.size}px]` : ""
                      }`}
                      scope="col"
                    >
                      {heading.element || heading.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>{children}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TableRow({ children }: { children: React.ReactNode }) {
  return <tr className="border-b">{children}</tr>;
}

export function TableCell({ children }: { children: React.ReactNode }) {
  return (
    <td className="px-6 py-4 whitespace-nowrap border-b border-l">
      {children}
    </td>
  );
}
