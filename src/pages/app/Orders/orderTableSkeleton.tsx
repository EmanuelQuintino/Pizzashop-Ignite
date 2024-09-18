import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";

export function OrderTableSkeleton() {
  return Array.from({ length: 10 }).map((_, index) => {
    return (
      <TableRow key={index}>
        <TableCell>
          <Button variant={"outline"} size="xs" disabled>
            <Search className="h-3 w-3" />
            <span className="sr-only">Detalhes do pedido</span>
          </Button>
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-[160px]" />
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-[110px]" />
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-[90px]" />
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-[180px]" />
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-[64px]" />
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-[92px]" />
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-[92px]" />
        </TableCell>
      </TableRow>
    );
  });
}
