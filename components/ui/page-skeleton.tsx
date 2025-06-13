"use client";

import { Skeleton } from "./skeleton";

interface PageSkeletonProps {
  title?: string;
  description?: string;
  hasSearch?: boolean;
  hasActions?: boolean;
  actionButtons?: number;
  tableRows?: number;
}

export function PageSkeleton({
  title = "Loading...",
  description = "Loading content...",
  hasSearch = true,
  hasActions = true,
  actionButtons = 2,
  tableRows = 5,
}: PageSkeletonProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <Skeleton className="h-9 w-48" />
        <Skeleton className="h-5 w-80" />
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {hasSearch && (
          <div className="flex w-full sm:w-auto items-center gap-2">
            <Skeleton className="h-10 w-full sm:w-[300px]" />
            <Skeleton className="h-10 w-10" />
          </div>
        )}

        {hasActions && (
          <div className="flex w-full sm:w-auto items-center gap-2">
            {Array.from({ length: actionButtons }).map((_, i) => (
              <Skeleton key={i} className="h-9 w-24" />
            ))}
          </div>
        )}
      </div>

      {/* Card with Table */}
      <div className="rounded-lg border bg-card">
        {/* Card Header */}
        <div className="p-4 sm:p-6">
          <div className="space-y-2">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-auto">
          <table className="w-full">
            <thead>
              <tr>
                {Array.from({ length: 5 }).map((_, i) => (
                  <th key={i} className="h-12 px-4 text-left align-middle">
                    <Skeleton className="h-4 w-24" />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: tableRows }).map((_, rowIndex) => (
                <tr key={rowIndex} className="border-t">
                  {Array.from({ length: 5 }).map((_, cellIndex) => (
                    <td key={cellIndex} className="p-4">
                      <Skeleton className="h-4 w-full" />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
