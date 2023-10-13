namespace ConsoleApp1._8kyu;

public class SimpleFun_261
{
    public static string WhoseMove(string lastPlayer, bool win)
    {
        return win ? lastPlayer : lastPlayer == "black" ? "white" : "black";
    }
}