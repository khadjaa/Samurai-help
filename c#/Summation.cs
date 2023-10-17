namespace ConsoleApp1._8kyu;

public class Summation
{
    public static int summation(int nums)
    {
        var sumOfArrayValues = 0;
        
        for (int i = 1; i <= nums; i++)
        {
            sumOfArrayValues += i;
        }

        return sumOfArrayValues ;
    }
}