import { ProgressCircle } from "@tremor/react";

export function ProgressCircleHero() {
    return (
        <div className="flex justify-start space-x-5 items-center">
            <ProgressCircle value={75} size="md">
                <span className="text-xs font-medium text-slate-700">75%</span>
            </ProgressCircle>
            <div>
                <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                    $340/$450 (75%)
                </p>
                <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                    Spend management control
                </p>
            </div>
        </div>
    );
}
