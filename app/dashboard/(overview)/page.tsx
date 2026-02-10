/*
 * @Author: Liu.Yingming
 * @Date: 2026-02-10 11:17:09
 * @LastEditors: Liu.Yingming
 * @LastEditTime: 2026-02-10 17:19:59
 * @Description: 
 */
import { Suspense } from "react";
import CardWrapper, { Card } from "../../ui/dashboard/cards";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import RevenueChart from "../../ui/dashboard/revenue-chart";
import { lusitana } from "../../ui/fonts";
import { fetchCardData, fetchLatestInvoices, /*fetchRevenue */} from "@/app/lib/data";
import { CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from "@/app/ui/skeletons";

export default async function Page() {
    //const revenue = await fetchRevenue();
    const lastInvoices = await fetchLatestInvoices();
    const cardData = await fetchCardData();
    const totalPaidInvoices = cardData.totalPaidInvoices;
    const totalPendingInvoices = cardData.totalPendingInvoices;
    const numberOfInvoices = cardData.numberOfInvoices;
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/*<Card title="Collected" value={totalPaidInvoices} type="collected" />
                <Card title="Pending" value={totalPendingInvoices} type="pending" />
                <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
                <Card title="Total Customers" value={cardData.numberOfCustomers} type="customers" />*/}
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper/>
                </Suspense>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                {/*<RevenueChart revenue={revenue} />
                <LatestInvoices latestInvoices={lastInvoices} />*/}
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton/>}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </main>
    );
}
