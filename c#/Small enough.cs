namespace ConsoleApp1
{
    internal class Program
    {
        public static bool SmallEnough(int[] a, int limit)
        {
            foreach (var t in a)
            {
                if (t > limit)
                {
                    return false;
                }
            }
            return true;
        }
        
        private static void Main(string[] args)
        {
            var check = SmallEnough(new int[] { 66, 101 }, 200);
            Console.WriteLine(check);
        }
    }
}