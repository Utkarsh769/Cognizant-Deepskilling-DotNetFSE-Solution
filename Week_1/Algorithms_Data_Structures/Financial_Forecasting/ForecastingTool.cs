using System;

public class ForecastingTool {
    public static double PredictFutureValue(double presentValue, double growthRate, int years) {
        if (years <= 0) {
            return presentValue;
        }
        
        double nextYearBalance = presentValue * (1 + growthRate);
        return PredictFutureValue(nextYearBalance, growthRate, years - 1);
    }

    public static void Main(string[] args) {
        double investment = 1000.0;
        double annualRate = 0.05;
        int timePeriod = 5;

        double predictedTotal = PredictFutureValue(investment, annualRate, timePeriod);

        Console.WriteLine("Starting Value: $" + investment);
        Console.WriteLine("Forecast value after " + timePeriod + " years: $" + predictedTotal.ToString("F2"));
    }
}