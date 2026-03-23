import React from 'react';

export interface TableColumn<T = Record<string, unknown>> {
  /** Column key matching a property in the data */
  key: keyof T & string;
  /** Column header label */
  label: string;
  /** Custom cell renderer */
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

export interface TableProps<T = Record<string, unknown>> {
  /** Column definitions */
  columns: TableColumn<T>[];
  /** Table row data */
  data: T[];
  /** Alternating row background colors */
  striped?: boolean;
  /** Hover effect on rows */
  hover?: boolean;
  /** Reduced padding for dense layouts */
  compact?: boolean;
  /** Optional caption for accessibility */
  caption?: string;
  /** Additional CSS classes on the table element */
  className?: string;
  /** Called when a row is clicked */
  onRowClick?: (row: T, index: number) => void;
}

/**
 * Table Component
 *
 * Displays tabular data with support for striped rows, hover effects,
 * compact spacing, and row click handlers.
 *
 * @example
 * ```tsx
 * const columns = [
 *   { key: 'name', label: 'Name' },
 *   { key: 'email', label: 'Email' },
 *   { key: 'status', label: 'Status', render: (v) => <span className={`badge badge-${v}`}>{v}</span> },
 * ];
 *
 * <Table columns={columns} data={rows} striped hover />
 * ```
 */
export function Table<T = Record<string, unknown>>({
  columns,
  data,
  striped = false,
  hover = false,
  compact = false,
  caption,
  className = '',
  onRowClick,
}: TableProps<T>) {
  const tableClasses = [
    'table',
    striped ? 'table-striped' : '',
    hover ? 'table-hover' : '',
    compact ? 'table-compact' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="table-wrapper">
      <table className={tableClasses}>
        {caption && <caption>{caption}</caption>}
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} scope="col">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={onRowClick ? () => onRowClick(row, rowIndex) : undefined}
              style={onRowClick ? { cursor: 'pointer' } : undefined}
            >
              {columns.map((col) => (
                <td key={col.key}>
                  {col.render ? col.render(row[col.key], row) : String(row[col.key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
