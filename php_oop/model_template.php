<?php
//create a php object that encapsulates the connect and query functionality of a mysql database
class db_parent_model{
	protected $connection = null; //used to store the connection we are using
	protected $last_results = []; //stores the last result set returned
	protected $last_operation_type = null; //used to store the last query type run
	public $cache = false;
	public function connect($db_name, $db_user, $db_pass){
		//this function connects to the mysql db
	}
	public function query($query_string){
		//this function sends a query to the DB
		//then checks if there are any results
		//then it reads in all the results into the last_results property
		//then it returns the results
	}
	protected function send_query($query_string){
		//performs the actual operation of sending the query to the mysql db
		//uses regex to search the string for the operation type, and sets last_operation_type
		//returns last_result_pointer with the pointer to the result set
	}
	protected function get_results($result_var){
		//gets all of the results for a query
		//sets them into last_results and returns those results
	}
	protected function get_result_count($result_var){
		//this method returns how many results came back, whether it be for an insert/update (mysqli_affected_rows) or select (mysqli_num_rows).  Uses last_operation_type to determine which it should use.
	}

}

//create a DB extender to build on db_parent_model and add abstractions for basic CRUD operations
class db_model extends db_parent_model{
	public function update($key_values, $criteria){
		//update a record with $key_values based on criteria.  Craft the query that makes it happen.
		//for example:  $key_values: ['name'=>'Dan','age'=>41] $criteria: ['name'=>'Daniel'] would craft
		//UPDATE <your table> SET `name`='Dan', `age`='41' WHERE `name`='Daniel'
		//for_each loops and array_keys and array_values can be your friend
	}
	public function delete($criteria){
		//pass in an associative array with the field=>value.  For example $criteria : ['id'=>3] would craft a query string that deleted the record with the field id with a value of 3 (DELETE * FROM <your table> WHERE id = 3)
	}
	public function create($key_values){
		//craft an insert query based on the passed in associative array $key_values
	}
	public function read($fields=null, $criteria=null){
		//craft a select query based on $fields, the fields to return, and $criteria: the items for the WHERE clause.  
		//If $fields is null, return all fields.
		//if $criteria is null, return all rows
	}	
}



?>
