import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: dwlkjf3ut958hrwquigh392</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>

        <div className="space-y-6">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">Status</TableCell>
                <TableCell className="flex justify-end">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                    <span className="font-medium text-muted-foreground">
                      Pendente
                    </span>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">Cliente</TableCell>
                <TableCell className="flex justify-end">
                  João Emanuel Vieira Quintino
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">
                  Telefone
                </TableCell>
                <TableCell className="flex justify-end">
                  (88) 99999-9999
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">E-mail</TableCell>
                <TableCell className="flex justify-end">
                  emanuelquintino@hotmail.com
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">
                  Realizado há
                </TableCell>
                <TableCell className="flex justify-end">há 3 minutos</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="max-h-60 overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Produto</TableHead>
                  <TableHead className="text-right">Qtd.</TableHead>
                  <TableHead className="text-right">Preço</TableHead>
                  <TableHead className="text-right">Subtotal</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody className="max-h-60 overflow-y-auto">
                <TableRow>
                  <TableCell>Pizza Peperoni Família</TableCell>
                  <TableCell className="text-right">2</TableCell>
                  <TableCell className="text-right">R$ 69,90</TableCell>
                  <TableCell className="text-right">R$ 139,90</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Pizza Peperoni Família</TableCell>
                  <TableCell className="text-right">2</TableCell>
                  <TableCell className="text-right">R$ 69,90</TableCell>
                  <TableCell className="text-right">R$ 139,90</TableCell>
                </TableRow>
              </TableBody>

              <TableFooter>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right font-medium">
                  R$ 279,80
                </TableCell>
              </TableFooter>
            </Table>
          </div>
        </div>
      </DialogHeader>
    </DialogContent>
  );
}
