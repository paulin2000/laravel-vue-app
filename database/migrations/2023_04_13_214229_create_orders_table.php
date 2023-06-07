<?php
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->decimal('total_price', 20, 2);
//            Cette ligne de code crée une nouvelle colonne dans une table de base de données Laravel avec le nom "total_price" et le type de données "decimal".
//            Le type de données "decimal" est utilisé pour stocker des nombres décimaux précis avec une précision et une échelle spécifiées. Les deux paramètres suivants "20, 2" définissent la précision et l'échelle de la colonne "total_price".
//            Le premier paramètre "20" spécifie la précision totale de la colonne, c'est-à-dire le nombre maximum de chiffres que la colonne peut contenir, y compris les chiffres après la virgule.
//            Le deuxième paramètre "2" spécifie le nombre maximum de chiffres après la virgule dans la colonne.
//            Dans l'exemple ci-dessus, cela signifie que la colonne "total_price" peut stocker des nombres décimaux jusqu'à 20 chiffres de précision totale et 2 chiffres après la virgule.
            $table->string('status', 45);
            $table->timestamps();
            $table->foreignIdFor(User::class, 'created_by')->nullable();
            $table->foreignIdFor(User::class, 'updated_by')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
