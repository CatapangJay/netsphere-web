import { ReactNode } from 'react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Skeleton } from "../components/ui/skeleton";
import { Search, Filter, Download, Plus } from "lucide-react";
import React from 'react';

// Simple cn utility since we can't import from @/lib/utils
const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

export interface PageConfig {
  title: string;
  description: string;
  hasSearch?: boolean;
  hasActions?: boolean;
  actionButtons?: number;
  tableRows?: number;
  searchPlaceholder?: string;
  primaryActionText?: string;
  showExport?: boolean;
  showFilter?: boolean;
}





export const getPageSkeletonProps = (config: PageConfig) => {
  const {
    title,
    description,
    hasSearch = true,
    hasActions = true,
    actionButtons = 1,
    tableRows = 5,
  } = config;

  return {
    title,
    description,
    hasSearch,
    hasActions,
    actionButtons,
    tableRows,
  };
};

// Re-export components that might be needed by other files
export { Button, Input, Skeleton, Search, Filter, Download, Plus };

interface PageHeaderProps {
  title: string;
  description: string;
  isLoading?: boolean;
  children?: ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  isLoading = false,
  children
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        {isLoading ? (
          <>
            <Skeleton className="h-9 w-48" />
            <Skeleton className="h-5 w-80" />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
            <p className="text-muted-foreground">{description}</p>
            {children}
          </>
        )}
      </div>
    </div>
  );
};

interface SearchAndActionsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isLoading: boolean;
  config?: {
    searchPlaceholder?: string;
    primaryActionText?: string;
    showExport?: boolean;
    showFilter?: boolean;
    onPrimaryAction?: () => void;
  };
}

export const SearchAndActions: React.FC<SearchAndActionsProps> = ({
  searchQuery,
  setSearchQuery,
  isLoading,
  config = {}
}) => {
  const {
    searchPlaceholder = 'Search...',
    primaryActionText = 'Add New',
    showExport = true,
    showFilter = true,
    onPrimaryAction,
  } = config;

  if (isLoading) {
    return (
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex w-full sm:w-auto items-center gap-2">
          <Skeleton className="h-10 w-full sm:w-[300px]" />
          {showFilter && <Skeleton className="h-10 w-10" />}
        </div>
        <div className="flex w-full sm:w-auto items-center gap-2">
          {showExport && <Skeleton className="h-9 w-24" />}
          <Skeleton className="h-9 w-32" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex w-full sm:w-auto items-center gap-2">
        <div className="relative w-full sm:w-[300px]">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={searchPlaceholder}
            className="w-full pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {showFilter && (
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
        )}
      </div>

      <div className="flex w-full sm:w-auto items-center gap-2">
        {showExport && (
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        )}
        <Button size="sm" onClick={onPrimaryAction}>
          <Plus className="mr-2 h-4 w-4" />
          {primaryActionText}
        </Button>
      </div>
    </div>
  );
};

export const PageSkeleton: React.FC<PageConfig> = ({
  title,
  description,
  hasSearch = true,
  hasActions = true,
  actionButtons = 1,
  tableRows = 5,
}) => {
  const Skeleton = ({ className }: { className?: string }) => (
    <div className={cn("bg-muted animate-pulse rounded-md", className)} />
  );
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title={title}
        description={description}
        isLoading={true}
      />

      {hasSearch || hasActions ? (
        <SearchAndActions
          searchQuery=""
          setSearchQuery={() => {}}
          isLoading={true}
          config={{
            searchPlaceholder: 'Search...',
            primaryActionText: 'Add New',
            showExport: actionButtons > 1,
            showFilter: hasSearch,
          }}
        />
      ) : null}

      <div className="space-y-4">
        <Skeleton className="h-10 w-full" />
        {Array.from({ length: tableRows }).map((_, i) => (
          <Skeleton key={i} className="h-12 w-full" />
        ))}
      </div>
    </div>
  );
};
