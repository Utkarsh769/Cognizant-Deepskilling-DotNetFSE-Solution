public class ForecastingTool {

    public static double predictFutureValue(double presentValue, double growthRate, int years) {
        if (years <= 0) {
            return presentValue;
        }
        
        double nextYearBalance = presentValue * (1 + growthRate);
        return predictFutureValue(nextYearBalance, growthRate, years - 1);
    }

    public static void main(String[] args) {
        double investment = 1000.0;
        double annualRate = 0.05;
        int timePeriod = 5;

        double predictedTotal = predictFutureValue(investment, annualRate, timePeriod);

        System.out.println("Starting Value: $" + investment);
        System.out.println("Forecast value after " + timePeriod + " years: $" + String.format("%.2f", predictedTotal));
    }
}