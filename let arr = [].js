import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class BinarySearchExample {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Введіть довжину масиву: ");
        int arrayLength = scanner.nextInt();

        System.out.print("Введіть мінімальне значення діапазону: ");
        int minValue = scanner.nextInt();

        System.out.print("Введіть максимальне значення діапазону: ");
        int maxValue = scanner.nextInt();

        int[] array = generateRandomArray(arrayLength, minValue, maxValue);
        Arrays.sort(array);

        System.out.println("Відсортований масив: " + Arrays.toString(array));

        System.out.print("Введіть число для пошуку: ");
        int target = scanner.nextInt();

        int resultIndex = binarySearch(array, target);
        if (resultIndex != -1) {
            System.out.println("Число " + target + " знайдено на позиції " + resultIndex);
        } else {
            System.out.println("Число " + target + " не знайдено в масиві.");
        }

        scanner.close();
    }

    private static int[] generateRandomArray(int length, int minValue, int maxValue) {
        int[] array = new int[length];
        Random random = new Random();

        for (int i = 0; i < length; i++) {
            array[i] = random.nextInt(maxValue - minValue + 1) + minValue;
        }

        return array;
    }

    private static int binarySearch(int[] array, int target) {
        int left = 0;
        int right = array.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (array[mid] == target) {
                return mid;
            } else if (array[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }
}
