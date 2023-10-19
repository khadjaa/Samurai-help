namespace ConsoleApp1._8kyu;
using System.Text;

public class FizzBuzz
{
    static string TiyFizzBuzz(string sentence)
    {
        char[] vowelsUpperCase = { 'A', 'E', 'I', 'O', 'U' };
        string consonantsUpperCase = "BCDFGHJKLMNPQRSTVWXYZ";

        StringBuilder result = new StringBuilder();

        foreach (char ch in sentence)
        {
            if (consonantsUpperCase.Contains(ch))
            {
                result.Append("Iron");
            }
            else if (char.IsUpper(ch) && vowelsUpperCase.Contains(ch))
            {
                result.Append("Iron Yard");
            }
            else if (char.IsLower(ch) && vowelsUpperCase.Contains(char.ToUpper(ch)))
            {
                result.Append("Yard");
            }
            else
            {
                result.Append(ch);
            }
        }

        return result.ToString();
    }
}