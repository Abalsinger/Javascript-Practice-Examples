using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

class ColorBuzz
{
    static void Main()
    {
        for (int i = 1; i <= 100; i++)
        {
            if (i % 3 == 0 && i % 5 == 0)
            {
                Console.WriteLine("Orange");
            }
            else if (i % 3 == 0 && i % 7 == 0)
            {
                Console.WriteLine("Green");
            }
            else if (i % 5 == 0 && i % 7 == 0)
            {
                Console.WriteLine("Purple");
            }
            else if (i % 3 == 0)
            {
                Console.WriteLine("Yellow");
            }
            else if(i % 5 == 0)
            {
                Console.WriteLine("Red");
            }
            else if (i % 7 == 0)
            {
                Console.WriteLine("Blue");

            }
            else
            {
                Console.WriteLine(i);
            }

            Console.ReadLine();
        }
    }
}

