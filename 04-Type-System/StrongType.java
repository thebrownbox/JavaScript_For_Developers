public class StrongType {

    public static int add(int a, int b) {
        return a + b;
    }

    public static void show(String myName) {
        System.out.println("My name is: " + myName);
    }

    public static void main(String[] args) {
        System.out.println(add(1, 2));
        System.out.println(add(1, "2"));
        show(1);
    }
}
