namespace ConsoleApp1._8kyu;

public class Largest_Elements
{
    public static List<int> Largest(int n, List<int> xs)
    {
        if (xs == null || xs.Count == 0)
        {
            Console.WriteLine("Input list is empty or null.");
            return new List<int>();
        }
            
        return xs.OrderBy(x => x).TakeLast(n).ToList();
    }

    private static void Main(string[] args)
    {
        List<int> inputList = new List<int> { 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 };
        int n = 2;

        List<int> topElements = Largest(n, inputList);

        Console.WriteLine($"Top {n} elements: {string.Join(", ", topElements)}");
    }
}