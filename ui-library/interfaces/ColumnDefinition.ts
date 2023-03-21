export interface ColumnDefinition<TData> {
  name: string | React.ReactNode;
  cell: (item: TData) => React.ReactNode;
}
