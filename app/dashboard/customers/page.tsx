import { fetchInvoicesPages } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
import { Suspense } from 'react';
import CustomersTable from '@/app/ui/customers/table';

export const metadata: Metadata = {
    title: 'Customers',
};

export default async function CustomersPage(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {

    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    return (
        <div className="w-full">
            <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
                Customers
            </h1>
            <Search placeholder="Search customers..." />
            <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
                <CustomersTable query={query} currentPage={currentPage} />
            </Suspense>
        </div>
    );
}