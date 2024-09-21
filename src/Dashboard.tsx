import reactLogo from "./assets/react.svg";
import { Card, Divider } from "@tremor/react";
import { AreaChartHero } from "./components/AreaChartHero.tsx";
import { ChartComposition } from "./components/ChartComposition.tsx";
import { Text } from "./components/Text.tsx";
import { Badge } from "./components/Badge.tsx";
import { ProgressCircleHero } from "./components/ProgressCircleHero.tsx";
import { BarChartBike } from "./components/BarChartBike.tsx";
import { ScatterChartHero } from "./components/ScatterChartHero.tsx";

import "./Dashboard.css";

function Dashboard() {
    return (
        <>
            <div className="max-w-full mx-auto p-4 sm:p-6 lg:p-8">
                <header>
                    <div className="my-5 sm:flex sm:items-center sm:justify-between">
                        <h1 className="text-3xl text-slate-700 font-semibold inline">
                            <img
                                src={reactLogo}
                                className="logo react inline pr-2 mb-2"
                                alt="React logo"
                            />
                            React Dashboard
                        </h1>
                    </div>
                </header>
                <Divider />
                <main>
                    <div className="grid-cols-12 md:grid gap-10">
                        <div className="divide-y divide-tremor-border dark:divide-dark-tremor-border md:col-span-4">
                            <div className="h-28 mb-5">
                                <Badge />
                            </div>
                            <div className="h-28 p-5">
                                <ProgressCircleHero />
                            </div>
                            <div className="h-28 pt-10">
                                <Text />
                            </div>
                        </div>
                        <div className="h-56 md:col-span-8 md:h-auto">
                            <Card className="rounded-tremor-small p-5">
                                <AreaChartHero />
                            </Card>
                        </div>
                    </div>
                    <div className="grid-cols-12 md:grid my-10 gap-10">
                        <div className="md:col-span-6">
                            <Card className="rounded-tremor-small p-5">
                                <BarChartBike />
                            </Card>
                        </div>
                        <div className="md:col-span-6">
                            <Card className="rounded-tremor-small p-5">
                                <ScatterChartHero />
                            </Card>
                        </div>
                    </div>
                    <Card className="rounded-tremor-small my-10 p-5">
                        <AreaChartHero />
                    </Card>
                    <Card className="rounded-tremor-small my-10 p-5">
                        <div className="border-b border-tremor-border px-4 py-2 dark:border-dark-tremor-border">
                            <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                                Chart Composition
                            </h3>
                        </div>
                        <div className="h-60 p-2 md:h-auto">
                            <ChartComposition />
                        </div>
                    </Card>
                </main>
            </div>
        </>
    );
}

export default Dashboard;
