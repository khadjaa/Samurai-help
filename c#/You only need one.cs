/*
You will be given an array a and a value x. All you need to
do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/
namespace ConsoleApp1._8kyu;

public class You_only_need_one
{
    public static bool Check(object[] a, object x)
    {
        return a.Contains(x);
    }
}