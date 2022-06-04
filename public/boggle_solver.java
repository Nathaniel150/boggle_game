import java.util.*;
//import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.File;

class Main {
  
  private static Set<String> dictionary = new HashSet<>();
  private static Set<String> foundWords = new HashSet<>();

  
  public static void main(String[] args) throws IOException{

    String dictionaryFileName = "dictionary.txt";
    //open the file and scan data
    File file = new File(dictionaryFileName);
    Scanner scanner = new Scanner(file);

    //add all the words to the dictionary (in lowercase)
    while (scanner.hasNext()) {
        String word = scanner.next();
        dictionary.add(word.toLowerCase());
    }

    scanner.close();

    char[][] arr = { { 'n', 'a', 't', 'e' }, 
                    { 'b', 'l', 'n', 'c' }, 
                    { 'a', 'c', 'h', 'h' },
                    { 'r', 'r', 'e', 'o' } };

    for(int i = 0; i < arr.length; i++) {
      for(int j = 0; j < arr[0].length; j++) {
        StringBuilder sb = new StringBuilder();
        search(i, j, arr, sb);
      }
    }

    for (String s : foundWords) {
      System.out.println(s);
    }

    System.out.println(foundWords.size());
  }


  private static void search(int i, int j,char[][] arr, StringBuilder currWord) {
    //check if indicies are out of bounds or if square has been visited
    if(i >= arr.length || i < 0 || j >= arr[0].length || j < 0 || arr[i][j] == '#') {
      return;
    }

    char saved = arr[i][j];

    currWord.append(saved);
    //set the current char to a garbage char to we don't visit it again.
    arr[i][j] = '#';

    //System.out.println(currWord.toString());

    //when I find a valid word with at least 3 letters, add it to foundWords set
    if(dictionary.contains(currWord.toString()) && currWord.length() > 2) {
      foundWords.add(currWord.toString());
    }

    //call all four directions (eventually all eight directions)
    search(i + 1, j, arr, currWord);
    search(i - 1, j, arr, currWord);
    search(i, j + 1, arr, currWord);
    search(i, j - 1, arr, currWord);
    search(i + 1, j + 1, arr, currWord);
    search(i - 1, j - 1, arr, currWord);
    search(i + 1, j - 1, arr, currWord);
    search(i - 1, j + 1, arr, currWord);

    //delete the last char to reset the word
    currWord.deleteCharAt(currWord.length() - 1);
    
    //set the char back to what it was originally;
    arr[i][j] = saved;
  }
}