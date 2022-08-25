import { Button } from "@material-tailwind/react";

interface PaginationProps {
  page: number;
  itensCount: number;
  previous: () => void;
  next: () => void;
}

export default function Pagination(props: PaginationProps) {
  return (
    <div className="flex gap-4 items-center justify-between">
      <Button
        variant="outlined"
        size="sm"
        disabled={props.page <= 0}
        onClick={() => props.previous()}
      >
        Anterior
      </Button>
      <div>Página {props.page + 1}</div>
      <Button
        variant="outlined"
        size="sm"
        onClick={() => props.next()}
        disabled={props.itensCount < 10}
      >
        Próxima
      </Button>
    </div>
  );
}
