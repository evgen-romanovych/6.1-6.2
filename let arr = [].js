import com.github.javafaker.Faker;

public class BubbleSortNames {

    public static void main(String[] args) {
        int numberOfNames = 10;
        Faker faker = new Faker();
        String[] names = generateRandomNames(numberOfNames, faker);
        System.out.println("Початковий масив імен:");
        printArray(names);
        bubbleSort(names);
        System.out.println("\nВідсортований масив імен:");
        printArray(names);
    }

    private static String[] generateRandomNames(int numberOfNames, Faker faker) {
        String[] names = new String[numberOfNames];
        for (int i = 0; i < numberOfNames; i++) {
            names[i] = faker.name().fullName();
        }
        return names;
    }

    private static void bubbleSort(String[] array) {
        int n = array.length;
        boolean swapped;

        do {
            swapped = false;

            for (int i = 1; i < n; i++) {
                if (array[i - 1].compareTo(array[i]) > 0) {
                    String temp = array[i - 1];
                    array[i - 1] = array[i];
                    array[i] = temp;
                    swapped = true;
                }
            }

            n--;
        } while (swapped);
    }

    private static void printArray(String[] array) {
        for (String name : array) {
            System.out.println(name);
        }
    }
}
