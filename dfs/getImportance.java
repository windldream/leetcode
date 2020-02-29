/*
// Employee info
class Employee {
    // It's the unique id of each node;
    // unique id of this employee
    public int id;
    // the importance value of this employee
    public int importance;
    // the id of direct subordinates
    public List<Integer> subordinates;
};
*/
class Solution {
  public int getImportance(List<Employee> employees, int id) {
    for (Employee e: employees) {
      if (e.id == id) {
        if (e.subordinates.size() == 0) {
          return e.importance;
        }
        for (int subId: e.subordinates) {
          e.importance += getImportance(employees, subId);
        }
        return e.importance;
      }
    }
    return 0;
  }
}